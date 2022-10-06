const newMessageForm = document.getElementById("newMessageForm");
const newMessageInput = document.getElementById("newMessage");
const phoneMessageList = document.getElementById("phoneMessageList");

let messagesHeightAssigned = false;

newMessageForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let = messageInput = newMessageInput.value;

    if (!messagesHeightAssigned) {
        messagesHeightAssigned = true;

        phoneMessageList.style.height = phoneMessageList.clientHeight + "px";
    }

    if (messageInput.length > 0) {

        phoneMessageList.style.overflowY = "scroll";

        phoneMessageList.insertAdjacentHTML("beforeend",
            "<div class='phone__message phone__message--sent'>" + messageInput + "</div>"
        );

        phoneMessageList.scrollTop = phoneMessageList.scrollHeight;

        newMessageInput.value = "";
    }
});