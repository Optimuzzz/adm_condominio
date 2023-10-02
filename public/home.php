<?php
include_once 'templates/topo.php';
include_once 'templates/menu.php';
?>

<body cz-shortcut-listen="true">

	<main>
		<div class="container-xxl my-5">
			<div class="bg-body-tertiary p-5 rounded">
				<div class="col-sm py-1 mx-auto">
					<ul class="list-group d-flex align-items-center" id="list_entregas">
						<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
						</div>
					</ul>
				</div>
			</div>
		</div>

	</main>

	<?php include_once 'templates/footer.php'; ?>

</body>

</html>