const getFriendlyTimezone = (timestamp) => {
  if (timestamp.includes("Eastern Daylight Time")) {
    return "EST";
  }
};

const convertToLocal = () => {
  document.getElementById("result-container").innerHTML = "";
  document.getElementById("utc-header").innerHTML = "";
  document.getElementById("utc-container").innerHTML = "";
  document.getElementById("local-header").innerHTML = "";
  document.getElementById("local-container").innerHTML = "";
  document.getElementById("pst-header").innerHTML = "";
  document.getElementById("pst-container").innerHTML = "";

  const inputTimestamp = document.getElementById("input-timestamp").value;
  const timestamp = new Date(inputTimestamp);
  const epochMilli = timestamp.getTime();

  const zone = timestamp.getTimezoneOffset() * 60 * 1000;
  const tLocal = new Date(timestamp - zone);
  const localTimestampISO = tLocal.toISOString().slice(0, 19);

  // UTC
  document
    .getElementById("utc-header")
    .append(`UTC Timestamp -- ${timestamp.toUTCString()}`);
  document.getElementById("utc-container").append(inputTimestamp);
  document.getElementById("utc-container").innerHTML += "<br  />";
  document.getElementById("utc-container").innerHTML += "<br />";
  document
    .getElementById("utc-container")
    .append(`${timestamp.toLocaleString("en-US", { timeZone: "UTC" })} GMT`);

  document.getElementById("utc-container").innerHTML += "<br  />";
  document.getElementById("utc-container").innerHTML += "<br />";
  document.getElementById("utc-container").append(epochMilli);
  document.getElementById("utc-container").innerHTML += "<hr class='solid' />";

  // Local
  document
    .getElementById("local-header")
    .append(`Local Timestamp -- ${timestamp.toString()}`);

  document.getElementById("local-container").append(localTimestampISO);
  document.getElementById("local-container").innerHTML += "<br />";
  document.getElementById("local-container").innerHTML += "<br />";
  document
    .getElementById("local-container")
    .append(
      `${timestamp.toLocaleString()} ${getFriendlyTimezone(
        timestamp.toString()
      )}`
    );
  document.getElementById("local-container").innerHTML += "<br />";
  document.getElementById("local-container").innerHTML +=
    "<hr class='solid' />";

  // PST
  const pstLocalString = timestamp.toLocaleString("en-US", { timeZone: "PST" });
  const pstTimestamp = new Date(pstLocalString);
  const pLocal = new Date(pstTimestamp - zone);
  const pstTimestampISO = pLocal.toISOString().slice(0, 19);

  document
    .getElementById("pst-header")
    .append(`PST Timestamp -- ${pstTimestamp.toString().slice(0, 25)}`);

  document.getElementById("pst-container").append(pstTimestampISO);
  document.getElementById("pst-container").innerHTML += "<br />";
  document.getElementById("pst-container").innerHTML += "<br />";
  document.getElementById("pst-container").append(`${pstLocalString} PST`);
};
