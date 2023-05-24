const meeting = require("../models/meetups");


class Repository {

    async create(meetingInf) {
        return await meeting.create(meetingInf)
    }

    async findAll() {
        return await meeting.findAll()
    }

    async findOne(id) {
        return await meeting.findOne({ where: { id } });
    }

    async update(id, meetingData) {
        return await meeting.update(meetingData, { where: { id } });
    }

    async delete(id) {
        return await meeting.destroy({ where: { id } });
    }

}

module.exports = new Repository();