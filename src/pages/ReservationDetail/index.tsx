import React, { useEffect, useState, useRef } from 'react';
import * as _ from './style';
import MenuBar from 'components/MenuBar';
import RightArrow from 'assets/Icon/RightArrow';
import MainImg from 'assets/image/MainImg.jpg';
import Check from 'assets/Icon/Check';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ReservationModal from 'components/ReservationModal';
import { Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';
import axios from 'axios';

const ReservationDetail = () => {
  const history = useNavigate();
  const location = useLocation();
  const [locationData, setLocationData] = useState<any>([]);
  const [centerPosition, setCenterPosition] = useState({
    lat: 37.30138197654,
    lng: 126.865110591908
  });
  const [level, setLevel] = useState<number>(3);
  const mapRef = useRef<any>(null);
  const [pathCoordinates, setPathCoordinates] = useState<
    Array<{ lat: number; lng: number }>
  >([]);
  const [taxiPrice, setTaxiPrice] = useState();

  const queryParams = new URLSearchParams(location.search);
  const start = queryParams.get('start');
  const end = queryParams.get('end');
  const day = queryParams.get('day');
  const hour = queryParams.get('hour');
  const minute = queryParams.get('minute');

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const StartResponse = await axios(
          `https://dapi.kakao.com/v2/local/search/address?query=${start}&page=1&size=15&analyze_type=similar`,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`
            }
          }
        );
        const EndResponse = await axios(
          `https://dapi.kakao.com/v2/local/search/address?query=${end}&page=1&size=15&analyze_type=similar`,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`
            }
          }
        );

        const queryParams = new URLSearchParams({
          origin: `${StartResponse.data.documents[0].x}, ${StartResponse.data.documents[0].y}`,
          destination: `${EndResponse.data.documents[0].x}, ${EndResponse.data.documents[0].y}`
        });

        const Location = await axios(
          `https://apis-navi.kakaomobility.com/v1/directions?${queryParams}`,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY}`,
              'Content-Type': 'application/json'
            }
          }
        );

        
        const path = Location.data.routes[0].sections[0].roads.flatMap(
          (road: any) => {
            const coordinates = [];
            for (let i = 0; i < road.vertexes.length; i += 2) {
              coordinates.push({
                lat: road.vertexes[i + 1],
                lng: road.vertexes[i]
              });
            }
            return coordinates;
          }
        );
        setPathCoordinates(path);

        const newCenter = {
          lat:
            (StartResponse.data.documents[0].y * 1 +
              EndResponse.data.documents[0].y * 1) /
            2,
          lng:
            (StartResponse.data.documents[0].x * 1 +
              EndResponse.data.documents[0].x * 1) /
            2
        };
        setLocationData({
          startX: StartResponse.data.documents[0].y,
          startY: StartResponse.data.documents[0].x,
          endX: EndResponse.data.documents[0].y,
          endY: EndResponse.data.documents[0].x
        });
        setCenterPosition(newCenter);
      } catch (error) {
        console.error('위치 데이터 조회 실패:', error);
      }
    };

    if (start) {
      fetchLocation();
    }
  }, [start]);

  useEffect(() => {
    if (locationData.startX && locationData.endX) {
      const bounds = new kakao.maps.LatLngBounds();
      bounds.extend(
        new kakao.maps.LatLng(locationData.startX, locationData.startY)
      );
      bounds.extend(
        new kakao.maps.LatLng(locationData.endX, locationData.endY)
      );

      const map = mapRef.current;
      if (map) {
        map.setBounds(bounds);
        setLevel(map.getLevel());
      }
    }
  }, [locationData]);

  console.log(locationData);

  return (
    <_.Main_Container>
      <_.Main_Titile>
        장거리 갈 때
        <br />
        <_.Main_Title_Highlight>스윙 경매 예약</_.Main_Title_Highlight>으로
        합리적이게
      </_.Main_Titile>

      <_.Main_Info>
        경매서비스 알아보기 <RightArrow width="16" height="16" color="black" />
      </_.Main_Info>

      <_.Main_Img src={MainImg} alt="MainImg" />

      <_.Main_Map>
        출발/도착
        <Map
          center={centerPosition}
          style={{ width: '320px', height: '320px' }}
          level={level}
          ref={mapRef}
        >
          <MapMarker
            position={{
              lat: locationData.startX,
              lng: locationData.startY
            }}
          />
          <MapMarker
            position={{
              lat: locationData.endX,
              lng: locationData.endY
            }}
          />
          <Polyline
            path={pathCoordinates}
            strokeWeight={5}
            strokeColor="#FF0000"
            strokeOpacity={0.7}
            strokeStyle="solid"
          />
        </Map>
      </_.Main_Map>

      <_.Main_Location_Select>
        <_.Main_Start_Box
          onClick={() => {
            history('/searchlocation');
          }}
        >
          <_.Main_Start_Dot color={true} />
          {start ? start : '어디서 출발하시나요?'}
        </_.Main_Start_Box>

        <_.Main_Provider />

        <_.Main_Start_Box
          onClick={
            start
              ? () => {
                  history(`/searchlocation?start=${start}`);
                }
              : () => {
                  history(`/searchlocation`);
                }
          }
        >
          <_.Main_Start_Dot color={false} />
          {end ? end : ' 어디로 떠나시나요?'}
        </_.Main_Start_Box>
      </_.Main_Location_Select>

      <_.Main_Provider_Select />

      <_.Main_StartTime>
        출발요금
        <_.Main_TimePicker>
          <div>
            {day} {hour}:{minute}
          </div>
          <RightArrow width="20" height="20" color="black" />
        </_.Main_TimePicker>
      </_.Main_StartTime>

      <_.Main_Provider_Select />

      <MenuBar selectState={1} />
    </_.Main_Container>
  );
};

export default ReservationDetail;
