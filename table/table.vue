<template>
    <div>
        <p>Data</p>
        <table>
            <thead>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Contact
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contact in contacts" :key="contact.id">
                    <td>{{ contact.id }}</td>
                    <td>{{ contact.name }}</td>
                    <td>{{ contact.contact }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
module.exports = {
    name: 'Table',
    data: function data() {
        return {
            contacts: []
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.$root.getData('./table/data.json', (contents) => {
                this.contacts = JSON.parse(contents);
            });
        }
    }
};
</script>

<style></style>
