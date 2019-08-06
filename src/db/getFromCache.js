const { Day } = require('./');

/**
 * This function gets the dining hall from our cache and populates the cache
 * @param {Date} date This is the date in question
 * @param {string} dhKey This is one of (evk, village, parkside) stating which
 * dining hall to get.  This parameter is optional.  If this parameter is not
 * included, all dining halls should be returned.
 * @returns {Promise} Returns either an array of or a single dining hall object
 * @async
 * Note: We have in essence, a three-layer cache system.  Layer one is the redis
 * cache, layer two is our database, and layer three is the USC website
 * (accessed through the web scraper).  Since we are not doing any modification,
 * we only have to worry about GETS, and never have to worry about write-backs.
 * !!TODO: Implement a cache eviction policy for Redis and the Database.
 */
module.exports = async (date, dhKey) => {
  // First, check the redis cache for this date
  // !!TODO: Get from Redis Cache
  let diningHallDate = await getFromRedisCache(date);
  if (!diningHallDate) {
    // If not found in Redis Cache, check our Database
    diningHallDate = await Day.findOne({ date });
    if (!diningHallDate) {
      // If not found in DB, get from webscaper
      // !!TODO: Get from Web Scraper
      diningHallDate = await getFromWebScraper(date);
      if (!diningHallDate) {
        const err = new Error('Dining Hall Date not Found.');
        err.status = 500;
        throw err;
      }
      // Dining Hall date will not be null at this point
      // populate database for future requests
      await Day.create(diningHallDate);
    }
    // Populate Redis cache with diningHallDate
    // !!TODO: Populate Redis Cache
    await populateRedisCache(date);
  }
  // diningHallDate will be found at this point, and the cache will be fully populated
  const halls = diningHallDate.diningHalls;
  if (dhKey) {
    // Filter for a specific Dining Hall
    const hall = halls.find(h => h.key === dhKey);
    return hall;
  }
  // Return all dining halls (by this point, dhKey is null or undefined)
  return halls;
};
