const Service = require("../services/index");
const Response = require("../helper/index");



class meetupController {


    async createmeetup(req, res, next) {
        try {
            const meeting = req.body;
            await Service.createmeetup(meeting)
            res.json(new Response("Meetup was created", 200));
        }
        catch (err) {
            console.log(err);
            return next(err);
        }
    }
    async getAll(req, res) {
        const meeting = req.body;
        const meetups = await Service.findAllMeetups(meeting)
        return res.json(meetups)
    }

    async getOne(req, res) {
        const meetingId = req.params.id;
        const meetups = await Service.findOneMeetup(meetingId)
        return res.json(meetups)
    }

    async updatemeetup(req, res, next) {
        try {
            const meetingId = req.params.id;
            const meeting = req.body;
            await Service.updatemeetup(meetingId, meeting)
            res.json(new Response("Meetup was updated", 200));
        }
        catch (err) {
            console.log(err);
            return next(err);
        }
    }


    async deletemeetup(req, res, next) {
        try {

            const meetingId = req.params.id;
            await Service.deletemeetup(meetingId);
            res.json(new Response("Meetup was deleted", 200));
        }
        catch (err) {
            console.log(err);
            return next(err);
        }
    }

}

module.exports = new meetupController();