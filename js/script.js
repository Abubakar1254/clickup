
















function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function halfbar() {
    // // document.getElementById("half_sidebar").style.width = "500px";
    // document.getElementById("half_sidebar").style.marginLeft = "-130px";
    
    // document.getElementById("half_sidebar").style.position = "-130px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
$(document).ready(function () {
    $("#sidebartoggle").click(function () {
      $(".sidebarnew").toggleClass("inactive");
    });
  });

  function openReminderTab() {
  var reminderTab = new bootstrap.Tab(document.querySelector('#Reminder-tab'));
  reminderTab.show();
  
}
function openTabsTab() {
  var reminderTab = new bootstrap.Tab(document.querySelector('#Task-tab'));
  reminderTab.show();
}
function openDocTab() {
  var reminderTab = new bootstrap.Tab(document.querySelector('#Doc-tab'));
  reminderTab.show();
}
  const openButton = document.querySelector('#openSidebar-new');
          const closeButton = document.querySelector('.close-button-new');
          const sidebar = document.querySelector('.sidebar-new');
  
          openButton.addEventListener('click', () => {
              sidebar.classList.add('show');
              closeButton.classList.add('show'); 
          });
  
          closeButton.addEventListener('click', () => {
              sidebar.classList.remove('show');
              closeButton.classList.remove('show'); 
          });
