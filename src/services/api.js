const FORMSPREE_URL = "https://formspree.io/f/meozlakk";

const api = {
  sendMessage: async (data) => {
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return true;
    } catch (error) {
      console.error("Error sending message:", error);
      return { success: false, errors: ["An error occurred while sending the message."] };
    }
  }
};

export default api;
