import axios from 'axios';
import Dev from '../models/Dev';
import parseStringAsArray from '../../utils/parseStringAsArray';
import WebSocket from '../../websocket';

class DevController {
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    const devExists = await Dev.findOne({ github_username });

    if (devExists) {
      return res.status(400).json({ error: 'Dev already exists!' });
    }

    const response = await axios.get(
      `https://api.github.com/users/${github_username}`
    );

    const { name = login, avatar_url, bio } = response.data;

    const techsArray = parseStringAsArray(techs);

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      location,
      techs: techsArray,
    });

    const sendSocketMessageTo = await WebSocket.findConnections(
      { latitude, longitude },
      techsArray
    );

    await WebSocket.sendMessage(sendSocketMessageTo, 'new-dev', dev);
    return res.json(dev);
  }

  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  }
}

export default new DevController();
