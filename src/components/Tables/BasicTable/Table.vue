<template>
    <div>
        <div class="relative overflow-x-auto">
            <table v-bind="$attrs" class="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
                <slot></slot>
            </table>
        </div>
    </div>
</template>