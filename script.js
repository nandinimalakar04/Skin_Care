
    <!-- JavaScript -->
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const navLinks = document.getElementById("nav-links");

            window.showMenu = function () {
                navLinks.style.right = "0";
            }

            window.hideMenu = function () {
                navLinks.style.right = "-200px";
            }
        });
    </script>
</body>
</html>
