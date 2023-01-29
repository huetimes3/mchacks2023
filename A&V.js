// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import {placeOrder} from 'backend/orders.jsw'



$w.onReady(function () {

	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code

});

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button1_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	const order = {};
	order.items = [["Friend Burger", 3.45],["Cool Uncle Burger", 7.46]];
	order.subtotal = 10.91;

	placeOrder("ttricamavrodin@gmail.com", "A&V", new Date() , "4151 Coloniale", order);
}
