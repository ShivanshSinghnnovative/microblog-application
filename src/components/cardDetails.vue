<template>
    <div class="container">
        <div class="title">
            <slot name="titles">
            </slot>
        </div>
        <hr />
        <div class="description">
            <slot name="description">
            </slot>
        </div>
        <hr />
        <div class="like">
            <slot name="footer">
            </slot>
        </div>
       
    </div>
</template>

<script setup>

</script>

<style>

</style>