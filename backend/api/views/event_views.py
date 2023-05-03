from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser

from api.models import Event
from api.serializers import EventSerializer

# retrieve all the events
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAllEvents(request):

    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)

    return Response(serializer.data)

# retrieve all the events
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserEvents(request):
    user = request.user

    events = Event.objects.filter(user=user)
    serializer = EventSerializer(events, many=True)

    return Response(serializer.data)

# create a new event
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createEvent(request):
    user = request.user
    print("user = ",user)
    event = Event.objects.create(
        user = user, # for used we need to use tokens both access and refresh tokwens to identify the user
        event_name = 'Sample Event Name',
        data = '',
        # image = data['image'],
        location = 'Sample Location',
        # is_liked = data['is_liked']
    )
    if event is not None:
        serializer = EventSerializer(event,many=False)
        event.save()
        return Response(serializer.data)

    return Response({"detail" : "There is no such Event saved in database!"})

# upload the image file to evend anmd save event
@api_view(['POST'])
def uploadImage(request):
    data = request.data

    event_id = data['event_id']
    event = Event.objects.filter(_id=event_id).first()

    event.image = request.FILES.get('image')
    event.save()
    return Response("Image uploaded successfully")


# update an existing event
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateEvent(request,pk):
    # pk = event_id
    event = Event.objects.filter(_id=pk).first()
    print("pk = ",pk)
    data = request.data
    if event is not None:
        event.event_name = data['event_name']
        event.data = data['data']
        event.image = data['image']
        event.location = data['location']
        # event.is_liked = data['is_liked']

        if event is not None and event:
            print("event = ",event)
            event.save()
            serializer = EventSerializer(event,many=False)
            return Response(serializer.data)

    return Response({"msg": "Event updation Failed!!"})

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteEvent(request,pk):
    event = Event.objects.filter(_id=pk).first()
    if event is not None:
        event.delete()
    return Response({"details":"Event deleted successfully"})
