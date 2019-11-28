function random_range(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
	
}	
var list=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var imagess=['A.png','B.png','C.png','D.png','E.png','F.png','G.png','H.png','I.png','J.png','K.png','L.png',
            'M.png','N.png','O.png','P.png','Q.png','R.png','S.png','T.png','U.png','V.png','W.png','X.png',
			'Y.png','Z.png'];
var Generate=document.getElementById('generate');
var Div_buttons=document.getElementById('buttons');
    function Event(type,time,target)       //function template
	{
		this.type=type;
        this.time=time;
		this.target=target;
	}
  //var time_to_remove = setInterval(storage, 50000);
	window.addEventListener("load", function()
	 {
		var date=new Date();
	    var time=date.getTime();
		var generate_click=new Event(event.type,time,event.target.nodeName);
	    localStorage.setItem("type",generate_click.type);
	    localStorage.setItem("time",generate_click.time);
	    localStorage.setItem("target",generate_click.target);
	 },50000);
	function storage()
	{
			localStorage.clear();
	}
   setTimeout(function()
   {
	Generate.removeEventListener("click", storage);
   }, 50000);
 
 function display(text){
   alert(text);
 }
	 Generate.addEventListener("click",function()
	{   
		Div_buttons.innerHTML=" ";
		var inputt=document.getElementById('input');
		var number=inputt.value; 
			for(var i=0;i < number;i++)
		  {
			var num=random_range(0,list.length-1);
			var alpha1=list[num];
			var create_button=document.createElement('button');
			var button_text=document.createTextNode(alpha1);
			create_button.appendChild(button_text);
			Div_buttons.appendChild(create_button);
	      }
		 
   });
   
     Div_buttons.addEventListener("click",function(e)
	{   var date=new Date();
	    var time=date.getTime();
		var divbutton_click=new Event(event.type,time,event.target.nodeName);
	    localStorage.setItem("divtype",divbutton_click.type);
	    localStorage.setItem("divtime",divbutton_click.time);
		localStorage.setItem("divtarget",divbutton_click.target);
		var alpha = e.target.textContent;
		var div_img=document.getElementById("img");
		div_img.innerHTML=" ";
			for(var i=0;i<imagess.length;i++)                                                
		  {   
			  if(alpha==imagess[i][0])
			{
				var create_image=document.createElement("img");
				create_image.src=imagess[i];
				create_image.setAttribute("style","width:600px;");
			    create_image.setAttribute("style","height:600px;");
				div_img.appendChild(create_image);
						
			}
					
		  }
	});
	
	
		 
		 
		 
		
 