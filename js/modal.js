// modal.js
// Simple modal logic for TailwindCSS modal

document.addEventListener('DOMContentLoaded', function () {
	// Open modal
	document.querySelectorAll('[data-toggle="modal"]').forEach(function (btn) {
		btn.addEventListener('click', function () {
			var target = btn.getAttribute('data-target');
			var modal = document.getElementById(target);
			if (modal) {
				modal.classList.remove('hidden');
				// Animate fade in
				setTimeout(function () {
					modal.classList.remove('opacity-0');
					modal.classList.add('opacity-100');
				}, 10);
				modal.setAttribute('aria-hidden', 'false');
			}
		});
	});

	// Close modal
	document.querySelectorAll('[data-dismiss="modal"]').forEach(function (btn) {
		btn.addEventListener('click', function () {
			var modal = btn.closest('.modal-popup');
			if (modal) {
				// Animate fade out
				modal.classList.remove('opacity-100');
				modal.classList.add('opacity-0');
				setTimeout(function () {
					modal.classList.add('hidden');
				}, 300); // match duration-300
				modal.setAttribute('aria-hidden', 'true');
			}
		});
	});

	// Close modal when clicking outside modal content
	document.querySelectorAll('.modal-popup').forEach(function (modal) {
		modal.addEventListener('click', function (e) {
			if (e.target === modal) {
				// Animate fade out
				modal.classList.remove('opacity-100');
				modal.classList.add('opacity-0');
				setTimeout(function () {
					modal.classList.add('hidden');
				}, 300);
				modal.setAttribute('aria-hidden', 'true');
			}
		});
	});
});
