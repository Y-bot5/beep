console.log("Initialised \`index.js\`");

const submitForm = document.getElementById("submitForm");

submitForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const waveLength = formData.get("wavelength");
    const waveType = formData.get("wavetype");
    const playDuration = formData.get("playduration");

    window.location.href = `http://192.168.1.6:3000/?waveLength=${waveLength}&waveType=${waveType}&playDuration=${playDuration}`
})
