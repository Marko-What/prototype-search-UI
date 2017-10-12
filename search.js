$('div#button.onOff').on('click',function(){
	
	if($('select').val() == "all" ){	
	$('div#button.onOff').addClass('active');
	$('div#buttonAdvanced').removeClass('buttonAdvancedActive');
	$('div#button.offbuttoNone').removeClass('active');

	
		$('div#toggle').css('display','block');
		$('input#searchPerson').css('display','none');

		$('form#single').css('display','none');

	} /* end of if */

	

});

$('div#button.offbuttoNone').on('click',function(){
	
	if($('select').val() != "all" ){  		
	
	$('form#single').css('display','block');
	
	$('div#button.offbuttoNone').addClass('active');
	$('div#buttonAdvanced').addClass('buttonAdvancedActive');
	$('div#button.onOff').removeClass('active');
	
	
		value = $('select').val();
		/*confirm(value);*/
	/*	test = $('input#value');
		confirm(test);	*/
		$('label.value').text(value);	
		$('div#toggle').css('display','none');
		$('input#searchPerson').css('display','block');
	} /* end of if */
	
});


$('select#searchPerson option').on('click', function(){ 
	if($('select').val() != "all" ){  
	
	$('div#button.offbuttoNone').click();

	value = $(this).attr('value');

	$('form#single label.value').text(value);	
	
	/* modify name reference and id before passing value to post request ... */
	$('form#single input#searchPerson').attr('name',value);
	

	} /* end of if ...*/

	if($('select').val() == "all" ){
	$('div#button.onOff').click();
	}
});




$('select#search option').on('click', function(){
	
	if($('select').val() != "all" ){ 
		valueInput = $('input#searchPerson').val();
		if(valueInput !=""){confirm('request ...');} else {
			confirm('input field empty ...');		
		} /* end of if else  !="" */
	} /* end of if  != "all" */

	
});




$('select#search option').on('click', function(){ 
	if($(this).val() == "salesforce" ){ 
		$('div#contentheader').css('background-color','rgb(60, 174, 246)');
	} 
	if($(this).val() == "eloqua" ){ 
		$('div#contentheader').css('background-color','rgb(87, 24, 86)');
	} else {
		$('div#contentheader').css('background-color','rgb(60, 174, 246)');
	}
	
	searchType = $(this).val();
	$('div#searchType').text(searchType);
});
