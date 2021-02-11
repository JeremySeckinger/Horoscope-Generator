//Instead of using separate day and month inputs I wanted to figure out how to allow a date input to take in the month and day while ignoring the year.
//From research it seems more advanced methods using jquery can allow that, but without complicating the script I found a simpler method to make the year fixed to current.
//this way the user can only enter the day and year to get their horoscope traits--making input errors impossible, and keeping the code concise.
//the year is not fixed either, so it will continue functioning as years change.

var year = new Date().getFullYear();
document.getElementById('date').setAttribute("min", year + "-01-01");
document.getElementById('date').setAttribute("max", year + "-12-31");

document.querySelector('button').addEventListener('click', getHoroscope)

function getHoroscope(){
    let date = document.querySelector('#date').value

    if((date >= year + "-03-21") && (date <= year + "-04-20")){
        document.getElementById("horoscopeText").innerText = "You are an Ares";
        document.getElementById("horoscopeExplanation").innerText = "The Aries zodiac sign is the 1st sign of the zodiac. The Aries people are willful, feisty, self-centered, courageous, bold, foolhardy, independent and straightforward.The career suited for Aries people includes any work in the supervisory or leader position. They need to be in control and therefore will not shy from taking the lead. They tend to be a bit aggressive in love and very intent. They are extremely faithful with their partner if they are happy in a relationship. ";
    } else if ((date >= year + "-04-21") && (date <= year + "-05-20")){
        document.getElementById("horoscopeText").innerText = "You are a Taurus";
        document.getElementById("horoscopeExplanation").innerText = "The Taurus zodiac sign is the 2nd sign of the zodiac. The Taurus people are practical, creative, loyal, possessive, temperamental, sensually indulgent, down-to-earth, dependable, persistent and practical. The Taurus zodiac sign is the 2nd sign of the zodiac. The Taurus people are practical, creative, loyal, possessive, temperamental, sensually indulgent, down-to-earth, dependable, persistent and practical. The career suited for Taurus people is any routine job with a stable boss as they are dutiful employees.The Taurus people are loyal partners, affectionate, possessive and love to demonstrate their love physically.";
    } else if ((date >= year + "-05-21") && (date <= year + "-06-21")){
        document.getElementById("horoscopeText").innerText = "You are a Gemini";
        document.getElementById("horoscopeExplanation").innerText = "The Gemini zodiac sign is the 3rd sign of the zodiac. The Gemini people are curious, elusive, unpredictable, changeable, versatile, childlike, romantic, playful, friendly, talkative and have a keen intellect. The career suited for Gemini people are writer, communicator, etc. They hate to follow routines, while jobs with incentives give them a kick. They tend to change jobs frequently as they get bored easily and need challenges in their jobs. The Gemini people are supportive partners and are found to be independent, creative and inventive in bed.";
    } else if ((date >= year + "-06-22") && (date <= year + "-07-22")){
        document.getElementById("horoscopeText").innerText = "You are a Cancer";
        document.getElementById("horoscopeExplanation").innerText = "The Cancer zodiac sign is the 4th sign of the zodiac. The Cancer people are cautious, protective, nurturing, secretive, instinctive, needy, sensitive, funny, empathetic and deeply complex people. Cancer people are suited for the business world. They excel in family businesses and like to serve others and take care of others. They do not like working alone. The Cancer people love deeply, like to please their partners with their all-consuming love.";
    } else if ((date >= year + "-07-23") && (date <= year + "-08-23")){
        document.getElementById("horoscopeText").innerText = "You are a Leo";
        document.getElementById("horoscopeExplanation").innerText = "The Leo zodiac sign is the 5th sign of the zodiac. The Leos are distinctive, provocative, demanding, goal-oriented, flamboyant, self-made, warm, outgoing, sincere and loyal people.The career suited for Leos is as a team leader, where they get recognition and are able to work independently. They are faithful partners who demand loyalty from their partners. They are very amorous lovers.";
    } else if ((date >= year + "-08-24") && (date <= year + "-09-23")){
        document.getElementById("horoscopeText").innerText = "You are a Virgo";
        document.getElementById("horoscopeExplanation").innerText = "The Virgo zodiac sign is the 6th sign of the zodiac. The Virgos are discriminating, obsessive, realistic, analytical, reliable, self-contained, knowledgeable, predictable, obsessive, discriminating, street-smart, detailed and modest people. They are workaholics and overachievers. They tend to over-analyze things and for them work is life. They are intellectual and detached partners who believe in an equal give and take relationship.";
    } else if ((date >= year + "-09-24") && (date <= year + "-10-23")){
        document.getElementById("horoscopeText").innerText = "You are a Libra";
        document.getElementById("horoscopeExplanation").innerText = "The Libra zodiac sign is the 7th sign of the zodiac. The Libra is the only zodiac sign that has an inanimate object, the scales, as its symbol. Librans are harmonious, civilized, intellectual, sophisticated, seductive, elegant, creative, witty, balanced, sociable and people who maintain their status quo.They are extremely intellectual and need jobs that are mentally stimulating and do not follow a routine. They need a balanced job that is ordered and challenging. They are excellent networkers and take a look at every aspect of the job before completing it. They excel in the field of creativity and arts.They are true romantics at heart and are a bit of flirts. They are good listeners and tend to be loyal and fair in relationships.";
    } else if ((date >= year + "-10-24") && (date <= year + "-11-22")){
        document.getElementById("horoscopeText").innerText = "You are a Scorpio";
        document.getElementById("horoscopeExplanation").innerText = "The Scorpio zodiac sign is the 8th sign of the zodiac. The Scorpio people are intense, magnetic, erotic, challenging, secretive, powerful, broody, passionate, immovable and penetrating. They love to debate and investigate things over. They cannot ask for help and solve problems and issues themselves. They like to work alone instead of in a team. They are creative, loyal and adventurous partners. They can pick up a vibe from their partner without the partner even knowing. Thus, they are able to give their partner everything they want without ever having to ask.";
    } else if ((date >= year + "-11-23") && (date <= year + "-12-21")){
        document.getElementById("horoscopeText").innerText = "You are a Sagittarius";
        document.getElementById("horoscopeExplanation").innerText = "The Sagittarius zodiac sign is the 9th sign of the zodiac. The Sagittarius are adventurous, hilarious, extrovert, romantics, spirited, unstoppable, generous, happy and open-minded. They are focused, determined individuals who need a variety and intellectual jobs. They are adventurous and bring innovative and creative ideas to work. They do not like mundane day-to-day jobs and like to work under pressure.They have an upbeat attitude in relationships and are loyal mates. They are always open and honest with their significant others.";
    } else if ((date >= year + "-12-22") && (date <= year + "-01-20")){
        document.getElementById("horoscopeText").innerText = "You are a Capricorn";
        document.getElementById("horoscopeExplanation").innerText = "The Capricorn zodiac sign is the 10th sign of the zodiac. The Capricorn people are organized, respectful, devoted, classy, materialistic, serious, staid, ambitious and practical. They have leadership ability and are extremely ambitious. They have good time management and follow strict timetables. They make good investment decisions and tend to become workaholics due to high ambitions.They are not very sociable people and are strong partners in romantic relationships. They are loyal and work hard to build a strong future. They tend to be emotionally aloof and more practical.";
    } else if ((date >= year + "-01-21") && (date <= year + "-02-18")){
        document.getElementById("horoscopeText").innerText = "You are an Aquarius";
        document.getElementById("horoscopeExplanation").innerText = "The Aquarius zodiac sign is the 11th sign of the zodiac. Aquarius people are original, idealistic, rebellious, independent, inventors, open minded and honest. They are analytical, serving and socially aware people. They are imaginative and excellent planners. They love working on large projects and implement new things. They are friendly and are very loving towards their partner.";
    } else if ((date >= year + "-02-19") && (date <= year + "-03-20")){
        document.getElementById("horoscopeText").innerText = "You are a Pisces";
        document.getElementById("horoscopeExplanation").innerText = "The Pisces zodiac sign is the 12th sign of the zodiac. Pisceans are dreamy, erratic, creative, romantic, compassionate, elusive, imaginative, sensitive and kind people. They follow no routine and take a lot of time to think. They are original in their ideas and are good in areas related to poetry and art. They are deeply and strongly devoted to their partners and will put their partners needs before their own.";
    }
}

