from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes


from api.models import Event
from api.serializers import EventSerializer

# retrieve all the events
@api_view(['GET'])
def getEvents(request):

    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)

    return Response(serializer.data)

# create a new event
@api_view(['POST'])
def createEvent(request):
    user = request.user
    print("user = ",user)
    data = request.data
    event = Event.objects.create(
        # user = request.user, # for used we need to use tokens both access and refresh tokwens to identify the user
        event_name = data['event_name'],
        data = data['data'],
        image = data['image'],
        location = data['location'],
        # is_liked = data['is_liked']
    )
    if event is not None:
        event.save()
        return Response('EVENT CREATED SUCCESSFULLY!!')

    return Response("FAILED TO CREATE EVENT!!")

# update an existing event
@api_view(['PUT'])
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
            event.save()
            serializer = EventSerializer(event,many=False)
            return Response({"details":"event updated successfully!!","data":serializer.data})

    return Response({"msg": "Event updation Failed!!"})

@api_view(['DELETE'])
def deleteEvent(request,pk):
    event = Event.objects.filter(_id=pk).first()
    if event is not None:
        event.delete()
    return Response({"details":"Event deleted successfully"})
