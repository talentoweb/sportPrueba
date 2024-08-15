'use strict';

/**
 * represent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::represent.represent');
