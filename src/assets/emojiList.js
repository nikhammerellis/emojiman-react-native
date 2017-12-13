const emojis = [

];
/* Categories
  Table Flipping
  Meh
  Rage
  Cute
  Love
  Animals
  Sadface
  Holidays
  Fun Fun Fun
*/
/*
//Emojis already in DB
// const emojis = [
//   { name: 'Shrug', emoji: '¯\\_(ツ)_/¯', categories: { Meh: true }, copyCount: 0 },
//   { name: 'Shrug Alternate', emoji: '¯\\_(シ)_/¯', categories: { Meh: true }, copyCount: 0 },
//   { name: 'I Dunno', emoji: '¯\\(º_o)/¯', categories: { Meh: true }, copyCount: 0 },
//   { name: 'Look of Disapproval', emoji: 'ಠ_ಠ', categories: { Meh: true }, copyCount: 0 },
//   { name: 'Patience Young Grasshopper', emoji: '┬─┬﻿ ノ( ゜-゜ノ)', categories: { Meh: true, 'Table Flipping': true }, copyCount: 0 },
//   { name: 'Flipping Tables', emoji: '(╯°□°)╯︵ ┻━┻', categories: { Rage: true, 'Table Flipping': true }, copyCount: 0 },
{ name: 'Sweating Bullets', emoji: '(;-_-)', categories: { Meh: true }, copyCount: 0 },
{ name: 'Zombie Approaching', emoji: '[¬º-°]¬', categories: { Meh: true, Holidays: true }, copyCount: 0 },
{ name: 'Middle Finger Up', emoji: 't(-.-t)', categories: { Meh: true, Rage: true }, copyCount: 0 },
{ name: 'Disapproving Shrug', emoji: '¯\\_ಠ_ಠ_/¯', categories: { Meh: true }, copyCount: 0 },
{ name: 'Stunna Shades', emoji: '(⌐■_■)', categories: { Meh: true }, copyCount: 0 },
{ name: 'Eff You', emoji: '┌∩┐(◣_◢)┌∩┐', categories: { Meh: true, Rage: true }, copyCount: 0 },
{ name: '1% Look of Disapproval', emoji: 'ಠ_ರೃ', categories: { Meh: true }, copyCount: 0 },
{ name: 'Orly face', emoji: '(• ε •)', categories: { Meh: true }, copyCount: 0 }, //owl?
{ name: 'You Da Man', emoji: '(σ・・)σ', categories: { Meh: true }, copyCount: 0 },
{ name: 'Face Palm', emoji: '(－‸ლ)', categories: { Meh: true, Sadface: true }, copyCount: 0 },
{ name: 'Just So Tired', emoji: '(●´⌓`●)', categories: { Meh: true, Sadface: true }, copyCount: 0 },
{ name: 'Look of a Disappointed Girlfriend', emoji: '(,Ծ_Ծ,)', categories: { Meh: true, Sadface: true }, copyCount: 0 },
{ name: 'Confused No', emoji: 'no_O', categories: { Meh: true }, copyCount: 0 },
{ name: 'Table Flipping Battle', emoji: '(╯°□°)╯︵ ┻━┻ ︵ ╯(°□° ╯)', categories: { 'Table Flipping': true, Rage: true }, copyCount: 0 },
{ name: 'Aggravated Table Flipping', emoji: '‎(ﾉಥ益ಥ）ﾉ﻿ ┻━┻', categories: { 'Table Flipping': true, Rage: true }, copyCount: 0 },
{ name: 'I Put Back Tables', emoji: '‎(ノ^_^)ノ┻━┻ ┬─┬ ノ( ^_^ノ)', categories: { 'Table Flipping': true, Cute: true }, copyCount: 0 },
{ name: 'Flipping Dude Over', emoji: '(╯°Д°）╯︵ /(.□ . \\)', categories: { 'Table Flipping': true, Rage: true }, copyCount: 0 },
{ name: 'Bear Flipping Table', emoji: '‎ʕノ•ᴥ•ʔノ ︵ ┻━┻', categories: { 'Table Flipping': true, Cute: true, Animals: true }, copyCount: 0 },
{ name: 'Bro Fist', emoji: '(ó ì_í)=óò=(ì_í ò)', categories: { Rage: true, Fun: true }, copyCount: 0 },
{ name: 'Y U No', emoji: 'ლ(ಠ益ಠლ)', categories: { Rage: true }, copyCount: 0 },
{ name: 'Rock Out', emoji: '\\m/...(>.<)…\\m/', categories: { Rage: true, Fun: true }, copyCount: 0 },
{ name: 'Lorena Bobbit', emoji: '( ＾◡＾)っ✂╰⋃╯', categories: { Rage: true, Sadface: true }, copyCount: 0 },
{ name: 'Get Lit', emoji: '╭(◔ ◡ ◔)/', categories: { Rage: true, Fun: true }, copyCount: 0 },
{ name: 'Nyan Cat', emoji: '~=[,,_,,]:3', categories: { Animals: true, Cute: true, Fun: true }, copyCount: 0 },
{ name: 'Happy Cat', emoji: '(=^ェ^=)', categories: { Animals: true, Cute: true }, copyCount: 0 },
{ name: 'Blank Critter Stare', emoji: '(・ω・)', categories: { Animals: true, Cute: true }, copyCount: 0 },
{ name: 'Duck Lips', emoji: '(・3・)', categories: { Animals: true }, copyCount: 0 },
{ name: 'Koala Bear', emoji: 'ʕ •ᴥ•ʔ', categories: { Animals: true, Cute: true }, copyCount: 0 },
{ name: 'Whale Face', emoji: '人◕ ‿‿ ◕人', categories: { Animals: true, Cute: true }, copyCount: 0 },
{ name: 'Baby Seal', emoji: 'ᶘ ᵒᴥᵒᶅ', categories: { Animals: true, Cute: true }, copyCount: 0 },
{ name: 'Sloth', emoji: '(⊙ω⊙)', categories: { Animals: true, Cute: true }, copyCount: 0 },
{ name: 'Fish', emoji: "ϵ( 'Θ' )϶", categories: { Animals: true }, copyCount: 0 },
{ name: 'Happy Hands Up', emoji: 'ლ(╹◡╹ლ)', categories: { Fun: true, Cute: true }, copyCount: 0 },
{ name: 'Wide-Eyed Happy Hands Up', emoji: 'ლ(o◡oლ)', categories: { Fun: true, Cute: true }, copyCount: 0 },
{ name: 'Squinty Happy Arms Up', emoji: '(ﾉ^_^)ﾉ', categories: { Fun: true, Cute: true }, copyCount: 0 },
{ name: 'Laughing Hands Up', emoji: '(ノ・∀・)ノ', categories: { Fun: true, Cute: true }, copyCount: 0 },
{ name: 'Ping Pong', emoji: 'ヽ(^o^)ρ┳┻┳°σ(^o^)/', categories: { Fun: true, Cute: true }, copyCount: 0 },
{ name: 'Huzzah Love', emoji: '\\(-ㅂ-)/ ♥ ♥ ♥', categories: { Fun: true, Cute: true, Holidays: true, Love: true }, copyCount: 0 },
{ name: 'Sleepy Flower Girl', emoji: '(◡ ‿ ◡ ✿)', categories: { Cute: true }, copyCount: 0 },
{ name: 'Glomp', emoji: '(づ￣ ³￣)づ', categories: { Love: true, Cute: true }, copyCount: 0 },
{ name: 'Happy Happy', emoji: 'ʘ‿ʘ', categories: { Fun: true, Cute: true }, copyCount: 0 },
{ name: 'Drugged Up Happy', emoji: '◉‿◉', categories: { Fun: true, Cute: true }, copyCount: 0 },
{ name: 'Gangnam Style', emoji: 'ヾ(⌐■_■)ノ♪', categories: { Fun: true, Cute: true }, copyCount: 0 },
{ name: 'Tickets To The Gun Show', emoji: 'ᕙ( ͡° ͜ʖ ͡°)ᕗ', categories: { Cute: true }, copyCount: 0 },
{ name: 'Would You Like Some Cake?', emoji: '( ・∀・)っ旦', categories: { Holidays: true, Cute: true }, copyCount: 0 },
{ name: 'Would You Like Some Pie?', emoji: '( ・∀・)っ♨', categories: { Holidays: true, Cute: true }, copyCount: 0 },
{ name: 'Why Hello', emoji: '(｡◕‿◕｡)', categories: { Love: true, Cute: true }, copyCount: 0 },
{ name: 'Love At First Sight', emoji: '♥‿♥', categories: { Love: true, Cute: true }, copyCount: 0 },
{ name: 'Lovely Cheeks', emoji: '♡＾▽＾♡', categories: { Love: true }, copyCount: 0 },
{ name: 'Gimme A Hug', emoji: '(ღ˘⌣˘ღ)', categories: { Love: true, Cute: true }, copyCount: 0 },
{ name: 'Ooh Sweetness', emoji: '( ˘ ³˘)♥', categories: { Love: true }, copyCount: 0 },
{ name: 'Rose', emoji: '--,--`--,{@', categories: { Love: true }, copyCount: 0 },
{ name: 'Successful Marriage Proposal', emoji: '(   ° ᴗ°)~ð  (/❛o❛\\)', categories: { Love: true, Cute: true }, copyCount: 0 },
{ name: 'Come Here And Kiss Me', emoji: '(ɔ˘з˘)ɔ', categories: { Love: true }, copyCount: 0 },
{ name: 'Playing In The Snow', emoji: '(╯^□^)╯︵ ❄☃❄', categories: { Holidays: true }, copyCount: 0 },
{ name: 'Happy New Year!', emoji: 'ᕕ( ᐛ )ᕗ', categories: { Fun: true, Holidays: true }, copyCount: 0 },
{ name: 'Tears', emoji: '(╥﹏╥)', categories: { Sadface: true }, copyCount: 0 },
{ name: 'Hopeless', emoji: '(◞‸◟；)', categories: { Sadface: true }, copyCount: 0 }
];*/
