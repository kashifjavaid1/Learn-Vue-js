<template>
    <h1>Dyanmic routing</h1>
    <h1>
        User Name: {{ $route.params.name }}
    </h1>
</template>
<script>
export default {
    name:"dyanmicComponent"
}
</script>