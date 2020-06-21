document.addEventListener('DOMContentLoaded', function () {
  var stripe = Stripe('pk_live_6m9utrX4rqny496YVGmwQnYP00eXfwPMQN');
  var checkoutButton = document.getElementById('dues-button');

  checkoutButton.addEventListener('click', function () {
    var donationPrice = document.querySelector('input[name="donation-amount"]:checked').dataset.price;
    var duesPrice = 'price_1GvFq1DrsB0XpAimAHKzRNZR';

    var items = [{
      price: duesPrice,
      quantity: 1
    }]

    if (donationPrice) {
      items.push({
        price: donationPrice,
        quantity: 1
      })
    }

    stripe.redirectToCheckout({
        lineItems: items,
        mode: 'payment',
        successUrl: 'https://dues.wellspringensemble.org/success',
        cancelUrl: 'https://dues.wellspringensemble.org/',
        billingAddressCollection: 'required',
      })
      .then(function (result) {
        if (result.error) {
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      });
  });
});
