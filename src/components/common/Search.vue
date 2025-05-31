<template>
    <div class="rounded-md bg-[#F1F0F8] w-[920px] p-6 mx-auto text-black"> 
        <form action="" class="flex justify-around">
            <div>
                <span class="mdi mdi-map-marker mdi-24px dark:text-black"></span>
                <input type="text" class="p-2 rounded-md" placeholder="地點" required>
            </div>
            <div>
                <span class="mdi mdi-calendar-month mdi-24px dark:text-black"></span>
                <input id="Birthday" type="date" class="p-2 rounded-md" required/>
            </div>
            <div>
                <span class="mdi mdi-account mdi-24px dark:text-black"></span>
                <input type="text" class="p-2 rounded-md" placeholder="人數">
            </div>
            <button class="p-2 bg-[#6C51E2] rounded-md text-white">Search</button>
        </form>
    </div>
</template>

<script setup lang="ts" name="Search">

</script>