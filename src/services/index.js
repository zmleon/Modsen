const meeting = require("../repository/index");



class Service {
    async createmeetup(meetingInf) {
        return await meeting.create(meetingInf)
    }

    async findAllMeetups() {
        return await meeting.findAll()
    }

    async findOneMeetup(id) {
        const res = await meeting.findOne(id);
        if (res) {
            return res;
        }
        else {
            throw new Error("This id wasn't found");
        }
    }

    async updatemeetup(id, meetingData) {
        const res = await meeting.update(id, meetingData);
        if (res) {
            return res;
        }
        else {
            throw new Error("This id wasn't found");
        }
    }

    async deletemeetup(id) {
        const res = await meeting.delete(id);
        if (res) {
            return res;
        }
        else {
            throw new Error("This id wasn't found");
        }
    }

}

module.exports = new Service();