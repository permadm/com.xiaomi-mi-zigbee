'use strict';

const path = require('path');
const ZigBeeDriver = require('homey-zigbeedriver');

module.exports = new ZigBeeDriver(path.basename(__dirname), {
	debug: true,
	capabilities: {
		alarm_contact: {
			command_endpoint: 0,
			// command_cluster: 'genLevelCtrl',
			// command_set: 'moveToLevel',
			// command_set_parser: (value, node) => ({
			//	level: value * maxBrightness,
			//	transtime: node.settings.transtime,
			// }),
			// command_get: 'currentLevel',
			// command_report_parser: value => value / maxBrightness,
		},
		measure_battery: {
			// command_endpoint: 0,
			// command_cluster: 'genOnOff',
			// command_set: value => value ? 'on' : 'off',
			// command_set_parser: () => ({}),
			// command_get: 'onOff',
			// command_report_parser: value => value === 1,
		},
		alarm_battery: {},
	},
});
