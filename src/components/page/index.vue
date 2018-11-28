<template>
    <div>
        <div class="content" >
            <transition name="move" mode="out-in">
                <!-- <keep-alive>-->
                <router-view></router-view>
                <!-- </keep-alive>-->
            </transition>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        created(){
            // bus.$on('collapse', msg => {
            //     this.collapse = msg;
            // })
        },
        mounted() {
        },
        methods: {
        },

    }
</script>

<style scoped>

</style>
