window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("BackToTop").style.display = "block";
  } else {
    document.getElementById("BackToTop").style.display = "none";
  }
}

function topFunction() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}


function showSidebar()
{
	const sidebar = document.querySelector('.sidebar');
	sidebar.style.display = 'flex';
}

function hideSidebar()
{
	const sidebar = document.querySelector('.sidebar');
	sidebar.style.display = 'none';
}

function resumeOpen()
{
	window.open('resume/Chaitanya Shah-Resume.pdf','_blank');
}

function navtoContact() 
{
	window.location.href='contact.html';
}