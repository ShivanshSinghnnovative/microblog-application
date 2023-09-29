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
            <slot name="likes">
            </slot>
        </div>
        <div class="topic">
            <slot name="Hashtag">
            </slot>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {
    border: 2px solid lightgray;
    box-shadow: 6px 6px lightgray;
    width: 20rem;
    border-radius: .5rem;
}

.topic {
    text-align: center;
    padding: .3rem;
}

.title {
    padding: 2rem;
    text-align: center;
    font-size: 25px;
    font-weight: 600;
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