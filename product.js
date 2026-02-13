 // Hamburger Menu Toggle
        function toggleMenu() {
            const navMenu = document.getElementById('navMenu');
            navMenu.classList.toggle('active');
        }

        // Image Gallery
        function changeImage(imageUrl, event) {
            const mainImageElement = document.getElementById('mainImage').querySelector('img');
            mainImageElement.src = imageUrl;
            
            // Update active thumbnail
            document.querySelectorAll('.thumbnail').forEach(thumb => {
                thumb.classList.remove('active');
            });
            if (event) {
                event.currentTarget.classList.add('active');
            }
        }

        // Quantity Controls
        function increaseQuantity() {
            const quantityInput = document.getElementById('quantity');
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        }

        function decreaseQuantity() {
            const quantityInput = document.getElementById('quantity');
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        }

        // Add to Cart
        function addToCart() {
            const quantity = document.getElementById('quantity').value;
            alert(`Added ${quantity} Epson Home Cinema 3800 to cart!`);
        }

        // Buy Now
        function buyNow() {
            const quantity = document.getElementById('quantity').value;
            alert(`Proceeding to checkout with ${quantity} item(s)...`);
        }

        // Tabs functionality
        function openTab(evt, tabName) {
            // Hide all tab contents
            const tabContents = document.getElementsByClassName('tab-content');
            for (let i = 0; i < tabContents.length; i++) {
                tabContents[i].classList.remove('active');
            }

            // Remove active class from all tabs
            const tabs = document.getElementsByClassName('tab');
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
            }

            // Show current tab and mark button as active
            document.getElementById(tabName).classList.add('active');
            evt.currentTarget.classList.add('active');
        }

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const nav = document.querySelector('nav');
            const navMenu = document.getElementById('navMenu');
            
            if (!nav.contains(event.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });