<script lang="ts">
	import { Center, Grid, Image, Tabs } from '@svelteuidev/core';
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;
</script>

<Grid justify="center">
	<Grid.Col span={1}>
		<Image
			width={'6vw'}
			height={'10vh'}
			radius="lg"
			src={$page.data.session?.user?.image}
			alt="something"
		/>
	</Grid.Col>

	<Grid.Col span={2}>
		<h1>{data.username} - {data.apps}</h1>
        <span class="signedInText">
			<small>Signed in as</small><br />
			<strong>{$page.data.session?.user?.email ?? $page.data.session?.user?.name}</strong>
		</span>
        <span>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum, quaerat officiis facilis
			autem dignissimos esse consectetur, error voluptatum reiciendis quibusdam.
		</span>
	</Grid.Col>
    </Grid>
    <Grid justify="center">
        <Grid.Col span={4}>
            <Tabs grow variant="outline" position="center">
                <Tabs.Tab label="home"><Center>zeroth tab content</Center></Tabs.Tab>
                <Tabs.Tab label="now"><Center>First tab content</Center></Tabs.Tab>
                <Tabs.Tab label="projects"><Center>Second tab content</Center></Tabs.Tab>
                <Tabs.Tab label="contact"><Center>Third tab content</Center></Tabs.Tab>
            </Tabs>
        </Grid.Col>
    </Grid>
    <Grid justify="center">
	<Grid.Col span={4}>


		<br />
		<h3>now</h3>
		<span>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum, quaerat officiis facilis
			autem dignissimos esse consectetur, error voluptatum reiciendis quibusdam. Exercitationem at
			velit eveniet magni placeat quisquam incidunt consequatur! Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Iste harum, quaerat officiis facilis autem dignissimos esse
			consectetur, error voluptatum reiciendis quibusdam. Exercitationem at velit eveniet magni
			placeat quisquam incidunt consequatur!
		</span>
		<h3>past</h3>
		<span>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum, quaerat officiis facilis
			autem dignissimos esse consectetur, error voluptatum reiciendis quibusdam. Exercitationem at
			velit eveniet magni placeat quisquam incidunt consequatur! Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Iste harum, quaerat officiis facilis autem dignissimos esse
			consectetur, error voluptatum reiciendis quibusdam. Exercitationem at velit eveniet magni
			placeat quisquam incidunt consequatur!
		</span>
	</Grid.Col>
</Grid>

<br />
