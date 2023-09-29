<template>
    <div class="user-container">
        <div>
            <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
            <div>
                <!-- name : {{ info.id }} -->
                <slot name="username">

                </slot>
            </div>
            <div class="time">
                <!-- time : {{ info.created }} -->
                <slot name="time">

                </slot>
                    <slot name="karma">
                    
                    </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: Object
    }
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}

.fa-user {
    font-size: 2.5rem;
}

.user-description {
    padding-left: 8px;
}

.time {
    font-size: 0.8rem;
}</style>