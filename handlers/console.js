module.exports = (bot) => {
    let prompt = process.openStdin()
    prompt.addListener("data", res => {
        let x = res.toString().trim().split(/ +/g)
            bot.channels.get("657301360936484884").send(x.join(" "));
        });
    }