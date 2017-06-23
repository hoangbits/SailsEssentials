/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /*
    i will convert query operation to waterline command
    */
    index: (req, res) => {
        var data = req.params.all();
        if (req.isSocket && req.method === 'POST') {
            Chat.query('INSERT into "chat" ("user","message") VALUES("' + data.user + '","' + data.message + '")'
                , (err, rows) => {
                    if (err) {
                        sails.log(err);
                        sails.log("Error in db operation,if isSocket and POST method");
                    } else {
                        Chat.publishCreate({ id: rows.insertId, message: data.message, user: data.user });
                    }
                })
        } else if (req.isSocket) {
            Chat.watch(req.socket);
            sails.log('User subcrible to ' + req.socket.id);
        }
        if (req.method === 'GET') {
            Chat.query('SELECT * FROM "chat"', (err, rows) => {
                if (err) {
                    sails.log(err);
                    sails.log("Error occurred in db operation,if method === GET!");
                } else {
                    res.send(rows);
                }
            });
        }
    }
};

