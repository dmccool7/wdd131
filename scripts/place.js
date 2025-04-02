document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const temperature = 64;
const wind = 7;

function calculateWindChill(temperature, wind) {
    if (temperature <= 50 && wind > 3) {
        let chill = (
            35.74 + 
            0.6215 * temperature -
            35.75 * Math.pow(wind, 0.16) +
            0.4275 * temperature * Math.pow(wind, 0.16)
        ).toFixed(2);
        document.getElementById("windchill").textContent = `${chill}°F`;
    } else {
        document.getElementById("windchill").textContent = "N/A";
    }
};

calculateWindChill(temperature, wind);