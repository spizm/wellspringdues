document.addEventListener('DOMContentLoaded', function () {
  var stripe = Stripe('pk_test_8mGh7tU4ba7EdfegNCiIzZ3f00nGkiJB4b');
  var checkoutButton = document.getElementById('dues-button');

  checkoutButton.addEventListener('click', function () {
    stripe.redirectToCheckout({
        lineItems: [{
          price: 'price_1GwBrnDrsB0XpAimjzFQsNTP',
          quantity: 1
        }],
        mode: 'payment',
        successUrl: 'https://dues.wellspringensemble.org/success',
        cancelUrl: 'https://dues.wellspringensemble.org/canceled',
      })
      .then(function (result) {
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer.
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      });
  });
});
