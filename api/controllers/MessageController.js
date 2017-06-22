/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  hi: (req,res) => {
    return res.send("<h1>hard damn</h1>");
  },
  bye: (req,res) => {
      return res.redirect("http://dantri.com.vn/");
  }
};

