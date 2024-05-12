function tabClick(evt, updatePage) {
    var i, tablinks, tabcontent;
    
    tabcontent = document.getElementsByClassName('tab-content');
    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tab-links');
    for(i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace('active', '');
    }

    document.getElementById(updatePage).style.display = 'flex';
    evt.currentTarget.className += ' active';
}