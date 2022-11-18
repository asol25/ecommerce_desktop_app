PGDMP                     
    z            dau_thu_chem_ca    15.0    15.0     y           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            z           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            {           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            |           1262    16398    dau_thu_chem_ca    DATABASE     �   CREATE DATABASE dau_thu_chem_ca WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE dau_thu_chem_ca;
                postgres    false            b          0    16400    accounts 
   TABLE DATA           g   COPY public.accounts (id, username, password, verified, status, email, "roleId", "areaId") FROM stdin;
    public          postgres    false    215   �       t          0    16564    analytic 
   TABLE DATA           \   COPY public.analytic (id, "viewCount", "watchTime", "bookingCount", "courseId") FROM stdin;
    public          postgres    false    233   �       v          0    41297    area 
   TABLE DATA           (   COPY public.area (id, name) FROM stdin;
    public          postgres    false    235   �       h          0    16431 	   categorys 
   TABLE DATA           -   COPY public.categorys (id, name) FROM stdin;
    public          postgres    false    221          r          0    16538    comments 
   TABLE DATA           G   COPY public.comments (id, comment, "videoId", "accountId") FROM stdin;
    public          postgres    false    231   `       n          0    16485    courses 
   TABLE DATA           �   COPY public.courses (id, title, description, "thumbnailUrl", "categoryId", "ratingId", "analyticId", "oddPrice", "newPrice") FROM stdin;
    public          postgres    false    227   @       l          0    16478    orders 
   TABLE DATA           N   COPY public.orders (id, "accountsId", "coursesId", "createdDate") FROM stdin;
    public          postgres    false    225   ]       f          0    16424    rating 
   TABLE DATA           >   COPY public.rating (id, flag, "like", love, star) FROM stdin;
    public          postgres    false    219   �       d          0    16413    roles 
   TABLE DATA           )   COPY public.roles (id, name) FROM stdin;
    public          postgres    false    217          j          0    16445    tokens 
   TABLE DATA           R   COPY public.tokens (id, "accessToken", "refresshToken", "accountsId") FROM stdin;
    public          postgres    false    223   Q       p          0    16509    videos 
   TABLE DATA           ~   COPY public.videos (id, title, description, "thumbanailUrl", "videoUrl", "courseId", "analyticId", "createdDate") FROM stdin;
    public          postgres    false    229   n       �           0    0    accounts_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.accounts_id_seq', 44, true);
          public          postgres    false    214            �           0    0    analytic_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.analytic_id_seq', 1, false);
          public          postgres    false    232            �           0    0    area_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.area_id_seq', 1, false);
          public          postgres    false    234            �           0    0    categorys_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categorys_id_seq', 1, false);
          public          postgres    false    220            �           0    0    comments_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.comments_id_seq', 1, false);
          public          postgres    false    230            �           0    0    courses_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.courses_id_seq', 1, false);
          public          postgres    false    226            �           0    0    orders_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.orders_id_seq', 1, false);
          public          postgres    false    224            �           0    0    rating_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.rating_id_seq', 1, false);
          public          postgres    false    218            �           0    0    roles_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.roles_id_seq', 1, false);
          public          postgres    false    216            �           0    0    tokens_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.tokens_id_seq', 1, false);
          public          postgres    false    222            �           0    0    videos_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.videos_id_seq', 1, false);
          public          postgres    false    228            b   �   x����n� @��W�Qy8M�&���:t�B�
hT�q�/n�ʍduAB��Å�!Z������Iq_�+	��t�{\"��|��t��2�Ǭύ7�i=R�_��p��0���Mۭu&n�Q:B�#�}0`\���*F4�a�u.LY��l�ԏ[W�@��y=b�W��$�g����y��T���e��[���Q2�H��х��ۊ��l|x�u����p�!�|dt��      t   4   x�ɱ !��X.����b��@�����e��ky��Q��E�9h�O��7~      v   /   x�3�t�M-�LN�2�t,�L���2�t--�/H�2�tLK��qqq ~o      h   B   x�3�L+��Q(.IL��2�LR�y)
y�)�Y�\�p��ĲD.nqrQfA	�)\� ��+F��� �t4      r   �   x�%��m�0E���t�N�K.���Dd��$�y��r��T
 D<=~q��ñ�n�>�Cw�(a��&���}�־}ǈ�����$N7Ü��N+d�5�-%?8P�5D+�2���c������g!Z�ͩ�KUz�Hd
���c�g��9ml�
�i���?���⫈=Xm��</��K���L�Ry圆��C��ubb�      n     x��R]O�0}N����%���q&E�@�h�A����q� �C춤�~Y�I<�p��p�{��ȹ2`_����nE.��Ae�������;`Ż� ��i+e+%A�r`�Fa^�|kl�y�c�23`#���R���m����c�m�Xq1d#��
����|���bOʦ�׵o��׭{�[��"��z~�~,��f����.����wZ�ą��s;�׫��aq<�����2���%�1��/.��C�J�����}8�:����
e��H��z�ʼb�s�)a��oq�a� s��Q�$h�`0�iEA!II� 
"�B�!�!�A���F���<�	s�I��ߘ*O�#(�K�t����>Y�!�x;��6��c]&�����I��Ig�6C��]}���y1{��s7�`v� R��H(�ppvr�{�{D4b	i8
�����_'F�>�O�b�1��W�����'>"�B�#
�PJ��g����<*t[��4J�UV�S��'� �V���F� �
R�      l   i   x�U��� D�o��>b/鿎������R�HE5IO 7�Z �L�&!A����U��+ �a607v����U)cG��t��f�� ������֞��_&#$�      f   0   x�3�44262�$��8-��L��1H���!��	����W� �      d   +   x�3�LL����2�,.-(�/I-�2���O�2�,-rb���� ��
I      j      x������ � �      p   �  x��U�n�6];_�M�Ӄ%[��'-2qڸc`��dZb,�I��_�辫.�����O�d�n���Zp#�ǹ�^R��Zm�U�V-9�Ҝ/�s�뺃���$�'ܝU�f��6�k>l퇋z;��+�b���%_����C�?%���)3�X�Y��\�������x�c�ވ>B�i첺6��]��2�h@��L6b�U]�]ʲ�[�����Mŗ�}n՚�7�0#!��Gq�PJGNJ���#��(���H�|B����;f[�h���@0	0y��� X'��`^0����<��OhV��J[����#�,�A%
P%dc�q�ϟ�e��ls��Hy.���$���۸)�f�ŷ|��������Mj2-Ҿ�Ji�ׅԅ<$o�[�Hy7��` _zߌ�!(��3i[�k����P��Ѹ�� �v(-U��\��ɶ�r|�jf��VآR�h�.�$��V�fL#?�	�x�����_��]���`X��)�7t�-v�@hL��ڥ�pI�!���^�Q̩G���j�Ѐ�x���G>�FC2��N�J��\P��TYGe�t��t��50yUR/dt�A?YTu�-����s��º��#��u=��?~��AÇ�`P)ְ�[u<[����^t��]MZ������=z���#<���N�/���:���^ ��7�h:A�����v���������!0����[����6��#J|��E�+�6�����i,+a2�w8aDh"��������Ä���^-��������<!AW�JAD���1N0�G�e	IB�ƚ3�e�� D7�-�9H�۹�kŁ[#3+L(��0@w�����4�4�?F-�xb��	����Kk��8	���̛���$qⓄ���r���b.�N] ��F�z6�ۣ���s����ޞ�{vv����U     