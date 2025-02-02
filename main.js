const blockedUrls = [
    "https://www.thepiratebay.org", // Torrenting
    "https://www.kickasstorrents.to", // Torrenting
    "https://1337x.to", // Torrenting
    "https://www.rarbg.to", // Torrenting
    "https://www.extratorrent.cc", // Torrenting
    "https://www.pornhub.com", // Adult content
    "https://www.redtube.com", // Adult content
    "https://www.xvideos.com", // Adult content
    "https://www.youjizz.com", // Adult content
    "https://www.bongacams.com", // Adult content
    "https://www.bet365.com", // Gambling
    "https://www.betfair.com", // Gambling
    "https://www.888poker.com", // Gambling
    "https://www.partypoker.com", // Gambling
    "https://www.torproject.org", // Circumvention tools
    "https://www.psiphon.ca", // Circumvention tools
    "https://www.vpnbook.com", // VPN service
    "https://www.hotspotshield.com", // VPN service
    "https://www.openvpn.net", // VPN service
    "https://www.rxmedsdirect.in", // Unregulated online pharmacy
    "https://www.4chan.org", // Objectionable content
    "https://www.8kun.top", // Objectionable content
  ];
  
  function isValidUrl(url) {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
    } catch (err) {
      return false;
    }
  }
  
  function isBlockedUrl(url) {
    return blockedUrls.includes(url.toLowerCase());
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector(".container input");
    const submitButton = document.querySelector(".container button");
    const messageDiv = document.createElement("div");
    messageDiv.className = "message";
    document.querySelector(".container").appendChild(messageDiv);
  
    const listContainer = document.createElement("div");
    listContainer.className = "list-container";
    listContainer.style.display = "none";
  
    const listTitle = document.createElement("h3");
    listTitle.textContent = "Checked URLs";
    listContainer.appendChild(listTitle);
  
    const urlList = document.createElement("ul");
    urlList.className = "url-list";
    listContainer.appendChild(urlList);
  
    document.body.appendChild(listContainer);
  
    submitButton.addEventListener("click", () => {
      const inputUrl = inputField.value.trim();
      messageDiv.textContent = ""; // Clear previous messages
  
      if (!inputUrl) {
        messageDiv.textContent = "Error: No URL provided.";
        messageDiv.style.color = "red";
        return;
      }
  
      let status;
  
      if (!isValidUrl(inputUrl)) {
        messageDiv.textContent = "Error: The URL is not valid.";
        messageDiv.style.color = "red";
        status = "Invalid";
      } else if (isBlockedUrl(inputUrl)) {
        messageDiv.textContent = "Warning: The URL is blocked.";
        messageDiv.style.color = "orange";
        status = "Blocked";
      } else {
        messageDiv.textContent = "Success: The URL is valid and accessible.";
        messageDiv.style.color = "green";
        status = "Accessible";
      }
  
      const listItem = document.createElement("li");
      listItem.innerHTML = `<span>${inputUrl}</span> <span class="status-${status.toLowerCase()}">${status}</span>`;
      urlList.appendChild(listItem);
  
      listContainer.style.display = "block";
    });
  });