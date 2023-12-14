<template>
  <div>
    <div class="app-bar">
      <h1>Home</h1>
      <!-- Additional navigation or menu items can go here -->
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Developer</td>
            <td>IT</td>
          </tr>
          <!-- Add more rows as needed -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  // You can add data or methods here if needed
};
</script>

<style>
.app-bar {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  text-align: left;
}

.table-container {
  margin: 20px;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid #ddd;
}

th, td {
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>
