/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import { render } from './render';
/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.navmenu');        
  links.forEach(link => {
      link.addEventListener('click', event => {
        links.forEach(li => {
          li.classList.remove('active');
        });
        const name = link.getAttribute('data-url');
        event.preventDefault();                        
        link.classList.add('active');
        render(name);
      });
  });
});
/*
$(".nav-toggler").each(function(_, navToggler) {
    var target = $(navToggler).data("target");
    $(navToggler).on("click", function() {
      $(target).animate({
        height: "toggle"
      });
    });
  });
*/

} )();


