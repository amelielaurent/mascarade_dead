<template>
    <div class="Layout-container">
        <div class="student-achievement">
            <StudentAchievement />
        </div>
        <div class="layout-content">
            <StudentNavigation />
            <div class="layout-main">
                <div class="layout-traps">
                    <MessageContainer />
                </div>
                <div class="layout-flash">
                    <StudentFlash />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import openSocket from 'socket.io-client';
    import {BASE_API_URL} from "../../../utils/constant";
    import StudentNavigation from '@/components/StudentNavigation';
    import MessageContainer from '@/components/messaging/MessageContainer';
    import Charity from '@/components/charity/Charity';
    import StudentAchievement from '@/components/student-progess/StudentAchievement';
    import StudentFlash from '@/components/student-progess/StudentFlash';

    export default {
        name: "SceneLayout",
        components: { MessageContainer, StudentAchievement, Charity, StudentNavigation, StudentFlash },
          data: () => ({
            counter: 0,
        }),
        sockets: {
            connect: function () {
                console.log('socket connected')
            },
            poke: function (data) {
                console.log(data);
            }
        },
        mounted() {
            window.addEventListener('visibilitychange', () => {
                switch(document.visibilityState) {
                    case 'hidden':
                        console.log('Tab is hidden');
                    case 'visible':
                        console.log('Tab focused');
                }
            })
        },
        methods: {
            emitEvent() {
                this.counter +=5;
                console.log();
                this.$socket.emit('poke', {
                    counter: this.counter,
                    studentId: this.$store.state.studentId,
                    sessionId: this.$store.state.sessionId
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .item {
        margin: 0 8px;
        &:last-child {
            margin-right: 0;
        }
    }
</style>