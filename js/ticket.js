document.addEventListener('DOMContentLoaded', function () {
    var stripe = Stripe('pk_live_6m9utrX4rqny496YVGmwQnYP00eXfwPMQN');
    var checkoutButton = document.getElementById('donate-button');
  
    checkoutButton.addEventListener('click', function () {
      var items = [{
        price: 'price_1HMPyzDrsB0XpAimwgLvita7',
        quantity: 1
      }]
  
      stripe.redirectToCheckout({
          lineItems: items,
          mode: 'payment',
          successUrl: 'https://dues.wellspringensemble.org/success',
          cancelUrl: 'https://dues.wellspringensemble.org/',
        })
        .then(function (result) {
          if (result.error) {
            var displayError = document.getElementById('error-message');
            displayError.textContent = result.error.message;
          }
        });
    });
  });
  