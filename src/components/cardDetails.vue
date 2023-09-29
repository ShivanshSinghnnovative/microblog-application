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

<style scoped>
*{
    font-family: sans-serif;
}
.container {
    border: 2px solid lightgray;
    box-shadow: 6px 6px rgb(229, 228, 228);
    width: 20rem;
    border-radius: .5rem;
}

hr{
    border: .3px solid rgb(238, 233, 233);
}
.title {
    padding: 2rem;
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    height: 2rem;
}

.description {
    height: 8rem;
    padding: 2rem;
    text-align: center;
    font-size: 20px;
}

.like {
    text-align: center;
    font-size: 20px;
    padding: 0.8rem;
}
</style>