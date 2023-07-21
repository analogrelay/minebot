import mineflayer from 'mineflayer';
import minecraftData from "minecraft-data";

const bot = mineflayer.createBot({
    username: 'minebot',
    host: 'localhost',
    port: 25565,
});

const data = minecraftData(bot.version);

let myHealth = bot.health;
let myBreath = bot.oxygenLevel;

bot.once('spawn', () => {
    bot.chat("Hello world!");
});

bot.on('health', () => {
    if (bot.health < myHealth) {
        bot.chat(`Ow! I only have ${bot.health} health left!`);
    } else if (bot.health > myHealth) {
        bot.chat(`Healed! I have ${bot.health} health now!`);
    }
    myHealth = bot.health;
});

bot.on("breath", () => {
    myBreath = bot.oxygenLevel;
})

bot.on("chat", (username, message) => {
    if (username === bot.username) return;
    if (message === "drown") {
        let block = bot.findBlock({
            matching: (b) => b.name === "water",
        });
        if (!block) {
            bot.chat("Can't find water, boss");
            return;
        }
        bot.chat("If you say so, boss");
        bot.lookAt(block.position);
        bot.setControlState("forward", true);
    }
});