'use strict';

/**
 * task-group service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::task-group.task-group');
