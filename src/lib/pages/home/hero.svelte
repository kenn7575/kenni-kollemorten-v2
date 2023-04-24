<script>
  import { Tabs, TabItem } from "flowbite-svelte";
</script>

<div class="flex justify-between">
  <div class="space" />
  <Tabs style="pill" class="flex flex-col items-end">
    <TabItem open>
      <span slot="title">Profile</span>
    </TabItem>
    <TabItem>
      <span slot="title">Dashboard</span>
    </TabItem>
    <TabItem>
      <span slot="title">Settings</span>
    </TabItem>
    <TabItem>
      <span slot="title">Users</span>
    </TabItem>
  </Tabs>
</div>

<style>
  .space {
    background: #aaa5;
    width: 80%;
  }
</style>
