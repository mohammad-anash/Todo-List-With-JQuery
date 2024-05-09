$(document).ready(() => {
  const input = $("#input");
  const button = $("#Btn");
  const storeContainer = $(".store-add");

  button.click(() => {
    let newItems = $("<div>").addClass("new-item");
    const createDiv = $("<div>").addClass("item-name");
    const deleteButton = $("<button>").text("Delete").addClass("delete-btn");
    createDiv.text(input.val());

    newItems.append(createDiv, deleteButton);
    storeContainer.append(newItems);
    input.val("");

    deleteButton.click(() => {
      newItems.hide();
    });
  });
});