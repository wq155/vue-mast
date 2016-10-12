var obj = {};
! function() {
  //监听失去焦点
  $("#shuru").blur( function () {
    var text = $("#shuru").val();
    if(text === "") return ;
    $("#show-list").append(
    	"<li>" +
        " <span>"+ text +"</span>" +
        "  <button onclick='obj.removeTodo(this)'>X</button> " +
        "</li>"
    );
    $("#shuru").val("");
  });

  //监听回车键
  $("#shuru").keyup(function(event){
    if(event.keyCode == 13) {
    	var text = $("#shuru").val();
    	if(text === "") return ;
	    $("#show-list").append(
	    	"<li>" +
	        " <span>"+ text +"</span>" +
	        "  <button onclick='obj.removeTodo(this)'>X</button> " +
	        "</li>"
	    );
	    $("#shuru").val("");
    }
  });

  obj.removeTodo = function(node) {
  	$(node).parent('li').remove();
  }
} ();